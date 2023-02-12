export const daysDiff = (initialDate: Date, endDate: Date): number => {
    const difference = initialDate.getTime() - endDate.getTime();
    const TotalDays = Math.ceil(difference / (1000 * 3600 * 24));
    return TotalDays;
}
