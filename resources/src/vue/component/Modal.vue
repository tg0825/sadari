<template>
    <div 
        class="modal"
        v-show="isShowModal"
    >
        <div class="modal-mask"></div>
        <div class="modal-box">
            <div class="modal-head">head</div>
            <div class="modal-body">
                <GroupList/>
            </div>
            <button 
                class="modal-close" 
                type="button"
                @click="_handleClickClose"
            ><i class="fa fa-times" aria-hidden="true"></i>
            </button>
        </div>
    </div>
</template>

<script>
import GroupList from 'Component/GroupList';

export default {
    name: 'modal-game-result',
    components: {
        GroupList
    },
    computed: {
        isShowModal() {
            return this.$store.state.modal.gameResult
        }
    },
    methods: {
        _handleClickClose() {
            this.$store.dispatch('modalSwitch', {
                name: 'gameResult',
                isShow: false
            });
        }
    },
}
</script>

<style lang="scss" scoped>
.modal {
    position: relative;
    z-index: 10;
}

.modal-close {
    position: absolute;
    top: -20px;
    right: -20px;
    font-size: 18px;
    color: #fff;
    background: #000;
    width: 35px;
    height: 35px;
    border-radius: 30px;
    border: 0;
}

.modal-box {
    position: fixed;
    top: 5%;
    left: 5%;
    right: 5%;
    z-index: 1000;
    background: #fff;
    border-radius: 10px;
    box-shadow: 0 20px 30px rgba(0, 0, 0, .2);
    min-width: 320px;
}

.modal-head {
    padding: 10px;
    border-bottom: 1px solid #eee;
    font-size: 16px;
}

.modal-body {
    overflow: auto;
    min-height: 320px;
    max-height: 80vh;
    border-radius: 0 0 10px 10px;
}

.modal-mask {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(0,0,0,.7);
}

.modal .member-list.member {
    margin-left: 0;
}

.modal .member-list.member + .member {
    margin-left: 5px;
}

.modal .member-list.member:before {
    content: attr(data-index);
    position: absolute;
    top: -5px;
    right: -5px;
    width: 30px;
    height: 30px;
    font-size: 16px;
    line-height: 32px;
    text-align: center;
    background: rgba(0, 0, 0, .9);
    border-radius: 4px;
    z-index: 10;
    box-shadow: 0 5px 10px rgba(0, 0, 0, .2);
    display: none;
    /*animation: bye 0.2s forwards;*/
}

.modal[data-option=number] .member-list.member:before {
    animation: pop 0.3s linear 1;
    display: inline-block;
}

.option.root {
    display: inline-block;
    margin-left: 20px;
    font-size: 14px;
}

.option.root button.option.item {
    padding: 5px;
    border: 1px solid #ddd;
    border-radius: 4px;
    background: #fff;
    font-size: 14px;
    color: #333;
}

.option.root button.option.item .fa {
    vertical-align: baseline;
}

.option.root .option.item {
    margin-right: 15px;
}
</style>