import React from "react";

interface ListProps<T> {
  items: T[];
  filter?: (item: T) => item is T;
}

type ReadonlyListProps<T> = Readonly<Pick<ListProps<T>, "items">> & {
  [K in keyof ListProps<T>]: ListProps<T>[K];
};

const List = <T,>({ items, filter }: ReadonlyListProps<T>) => {
  const filteredItems = filter ? items.filter(filter) : items;

  return (
    <ul>
      {filteredItems.map((item, index) => (
        <li key={index}>{JSON.stringify(item)}</li>
      ))}
    </ul>
  );
};

export const Usage = () => {
  const numbers = [1, 2, 3, 4, 5];
  const strings = ["apple", "banana", "cherry"];
  const objects = [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }];

  const numberFilter = (num: number): num is number => num > 2;
  const stringFilter = (str: string): str is string => str.includes("a");

  return (
    <div>
      <h2>Numbers</h2>
      <List items={numbers} filter={numberFilter} />

      <h2>Strings</h2>
      <List items={strings} filter={stringFilter} />

      <h2>Objects</h2>
      <List
        items={objects}
        filter={(obj): obj is { name: string } => obj.name.startsWith("A")}
      />
    </div>
  );
};
