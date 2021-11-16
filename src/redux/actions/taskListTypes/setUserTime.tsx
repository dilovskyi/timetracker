export interface setUserTimeInterface {
  type: "SET_USER_TIME";
  listItemId: string;
    newTime: {
      hours: number | string,
      minutes: number | string,
    },
}