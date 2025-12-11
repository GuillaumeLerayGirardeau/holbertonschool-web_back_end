import ClassRoom from "./0-classroom.js";

export default function initializeRooms () {
    const sizeList = [19, 20, 34];
    const roomList = [];

    for (const size of sizeList) {
        const newRoom = new ClassRoom(size);
        roomList.push(newRoom);
    }

    return roomList;
}
