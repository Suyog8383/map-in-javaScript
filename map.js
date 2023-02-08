const user_map = {
  1: { name: "suyog" },
  2: { name: "don" },
};
console.log("@SN ", user_map);

const userMap = new Map([
  [1, { name: "suyog" }],
  [2, { name: "don" }],
]);
userMap.set({ userId: 1 }, { name: "jhon" });
console.log("@SN ", userMap);
