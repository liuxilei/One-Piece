class List {
    constructor() {
        this.list = [];
        this.length = 0;
    }
    //添加
    add(item) {
        this.list.push(item);
        this.length++;
    }
    //判断存在
    has(item) {
        let result = false;
        for (let i = 0;i < this.length;i++) {
            if (this.list[i] === item) {
                result = true;
            }
        }
        return result;
    }
    //获取元素的级别
    getLevel(item) {
        let index = 1;
        if (this.has) {
            for (let i = 0;i < this.length;i++) {
                if (this.list[i] === item) {
                    index = i + 1;
                }
            }
            return index;
        } else {
            return null;
        }
    }
    //获取元素组的最大级别
    getMax() {
        return this.length;
    }
    //判断两个元素都在该元素集内
    hasDouble(item1, item2) {
        return this.has(item1) && this.has(item2);
    }
    /**
     * 能否进行转换 规则：在同一元素集的话，低等级无法向高等级转换
     * @param {string} item1 转换值
     * @param {string} item2 目标值
     */
    canChange(item1, item2) {
        return this.getLevel(item1) > this.getLevel(item2);
    }
}

export default List;