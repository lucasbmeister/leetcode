function findChampion(n: number, edges: number[][]): number {
  const champions = new Set<number>();

  for (let index = 0; index < n; index++) {
    champions.add(index);
  }

  for (let index = 0; index < edges.length; index++) {
    champions.delete(edges[index][1]);
  }

  if (champions.size > 1) return -1;

  return champions.keys().next().value;
}

console.log(findChampion(2, [[1, 0]]));
console.log(
  findChampion(4, [
    [0, 2],
    [1, 3],
    [1, 2],
  ])
);