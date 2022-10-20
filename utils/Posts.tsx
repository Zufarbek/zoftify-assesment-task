export class LocalStorage {
    lastId: number = this.getPostLastId();
    posts = this.getPosts();
    storage: any;

    get(key:any) {
        return this.storage.getItem(key);
    }

    set(key:any, value:any) {
        this.storage.setItem(key, value);
    }
    
    getPostLastId() {
        let localStorageItem = JSON.parse(localStorage.getItem('posts') || '[]');
        if(localStorageItem.length > 0) {
            let id = localStorageItem[localStorageItem.length - 1].id
            return id;
        }
        return 0
    }

    getPosts(){
        let items = JSON.parse(localStorage.getItem('posts') || '[]');
        return items
    }

}