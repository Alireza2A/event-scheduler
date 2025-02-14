export const getSelectedData = () => {
    return JSON.parse(localStorage.getItem("selectedDate")) || "";
};

export const setSelectedDate = (selectedDate) => {
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
};
export const getUserId = () => {
    return localStorage.getItem("userId") || "";
};
export const getToken = () => {
    return localStorage.getItem("token") || "";
};
