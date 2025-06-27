import { ASK_NURSING_QUESTION_URL } from "../../constants/apiConstants";
import axiosInstance from "../../https";

export const askNursingQuestion = async (question: string) => {
  const formData = new FormData();
  formData.append("query", question);

  const response = await axiosInstance.post(
    ASK_NURSING_QUESTION_URL,
    formData,
    {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    }
  );
  return response.data;
};
