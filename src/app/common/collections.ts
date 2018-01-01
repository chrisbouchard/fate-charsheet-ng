export function groupToMap<T, U>(iterable: Iterable<T>, getGroupKey: (item: T) => U): Map<U, T[]> {
    return [...iterable].reduce(
        (groups, item) => {
            const groupKey = getGroupKey(item);
            const group = groups.get(groupKey);

            if (group) {
                group.push(item);
            } else {
                groups.set(groupKey, [item]);
            }

            return groups;
        },
        new Map<U, T[]>()
    );
}
