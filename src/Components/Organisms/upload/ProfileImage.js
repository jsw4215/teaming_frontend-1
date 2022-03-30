import { useState } from "react";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../../redux/modules/image";
import plus from "../../../static/images/createProject/plus.png"

export const ProfileImage = () => {
    const [showImage, setShowImage] = useState([]);
    const dispatch = useDispatch();
  
    // 이미지 상대경로 저장
    const handleProfileImage = (event) => {
      console.log("single!")
      if(showImage.length>=1){
          return;
      }

      const image = event.target.files[0];
      let imageUrl = [...showImage];
  
      
    const currentImageUrl = URL.createObjectURL(image);
    imageUrl.push(currentImageUrl);
  
      setShowImage(imageUrl);
      dispatch(actionCreators.setFile(image));
    };
  
    // X버튼 클릭 시 이미지 삭제
    const handleDeleteProfileImage = (id) => {
      setShowImage("");
    };
  
    return (
      <div className="flex w-fit h-[20vh] bg-white mr-10">
        <label htmlFor="input-file" className="flex items-center justify-center h-full bg-white border-2 cursor-pointer rounded-xl aspect-square" onChange={handleProfileImage}>
          <input type="file" id="input-file" className="hidden bg-green-300" />
          <div className="w-1/4 h-1/4 aspect-square">
          <img src={plus} alt={"+"}/>
          </div>
        </label>
  
        
          <div className="flex items-center justify-center h-full border-2 rounded-xl aspect-square" onClick={() => handleDeleteProfileImage()}>
            <img src={showImage} alt={`${showImage}`} className="h-full"/>
          </div>
        
      </div>
    );
  };

export default ProfileImage;