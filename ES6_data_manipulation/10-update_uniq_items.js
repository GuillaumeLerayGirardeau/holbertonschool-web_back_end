export default function updateUniqueItems(map) {
    if (map instanceof Map) {
        let allKeys = map.keys();
        for (const key of allKeys) {
            if (map.get(key) === 1) {
                map.set(key, 100);
            };
        };
        return map;
    } else {
        throw new Error('Cannot process');
    }
}
