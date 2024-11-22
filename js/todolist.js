export default class toDoList
{
    constructor()
    {
        this._list = [];
    }

    getList()
    {
        return this._list;
    }

    clearList()
    {
        this._list = [];
    }

    addItemToList(itemObj)
    {
        this._list.push(itemObj);
    }
}