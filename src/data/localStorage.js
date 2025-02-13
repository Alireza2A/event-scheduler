export const getSelectedData = () => {
    return JSON.parse(localStorage.getItem("selectedDate")) || "";
};

export const setSelectedDate = (selectedDate) => {
    localStorage.setItem("selectedDate", JSON.stringify(selectedDate));
};
