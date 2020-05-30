let similiar = (arr1,arr2) => {
    let arr = []
    let find = []

    for (let i = 0; i<arr1.length; i++){
    if (arr1[i] === arr2[i])
        let cek = arr2.includes(arr1[i])
    }
    if  (cek== false){
        return false
    }
    return true
}

console.log(similiar([1,2,4,5,2],[3,1,2,2,4]));
