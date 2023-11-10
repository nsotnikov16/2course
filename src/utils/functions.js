export const formatePhone = phone => {
    return phone.replace(/[-() _]/g, "");
}

export const getSearchParams = () => {
    return (new URL(document.location)).searchParams;
}