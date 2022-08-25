export function getNextId(listOfItems: any[]): number {
    return (
      listOfItems.reduce(
        (prev, current) => {
          return current.id > prev.id ? current : prev;
        },
        { id: -1 }
      ).id + 1
    );
  }
  