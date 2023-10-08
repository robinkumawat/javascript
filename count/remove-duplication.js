const a = [34 , 66, 1,77,8 , 66,1,35,34,77,66];
const b = [];
for (const item of a) {
    if (!b.includes(item)) {
        a.push(item);
    }
}
