import { BASE_URL } from "./baseURL"
import {commonAPI} from "../servicess/commonAPI"
//uploading video
export const uploadVideo = async (video)=>{
// post requst to http://localhost:4000/videos  to adding videos in json server
//and return response to add components
  return await commonAPI("POST",`${BASE_URL}/videos`,video)
}


//get all videos from json server
export const getAllVideos = async (id)=>{
    // get requst to http://localhost:4000/videos for getting video from json server
    //and return response to view components
      return await commonAPI("GET",`${BASE_URL}/videos/${id}`," ")
    }

//delete a videos from json server
export const deleteVideo = async (id)=>{
    // http delete requst to http://localhost:4000/videos for getting video from json server
    //and return response to view components
      return await commonAPI("DELETE",`${BASE_URL}/videos/${id}`, {} )
    }

    //add category to json server
