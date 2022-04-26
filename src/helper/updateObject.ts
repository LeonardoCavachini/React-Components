export const updateObject = (oldObj: Object, updatedProperties: Object) => {
    return {
        ...oldObj,
        ...updatedProperties
    }
}