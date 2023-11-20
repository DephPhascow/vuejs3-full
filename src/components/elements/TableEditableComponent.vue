<template>
    <div v-if="selectable && selectedRows.length > 0">
        <ButtonComponent :text="$t('table.deleteAll')" class="button__primary" @click="deleteAllMarketRows()" />
    </div>
    <table class="table">
        <thead>
            <tr>
                <th v-if="selectable"><input type="checkbox" v-model="selectedAll" @click="toggleSelectAllItems"/></th>
                <th v-for="item, index in headers" :key="index">{{ item.name }}</th>
                <th v-if="tools">{{ $t('table.tools') }}</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="item, index in data" :key="index" :class="{
                'table__row-selected': selectedRows.includes(item.id)
            }">
                <th v-if="selectable" class="table__cell-min">
                    <input type="checkbox" :checked="selectedRows.includes(item.id)" @click="addSelectRow(item.id)" />
                </th>
                <td v-for="cell, cellIndex in item.data" :key="cell.name + cellIndex + index">
                    <InputTextComponent :type="headers[cellIndex].type" v-model="cell.value" @keyup="keyUp($event, index, cellIndex)" v-if="editableRow"/>
                    <p v-else>{{ cell.value }}</p>
                </td>
                <th v-if="tools" class="table__cell-min">
                    <ButtonComponent :text="$t('table.delete')" class="button__primary" @click="deleteRow(item.id)" />
                </th>
            </tr>
        </tbody>
    </table>
</template>

<style lang="scss">
.table {
    td, th, tr {
        border: 1px solid black;
    }
    td, th {
        padding: 2px 8px;
    }
    border-collapse: collapse;
    &__cell-min {
        width: 0px;
    }
    &__row {
        &-selected {
            background-color: #e0e0e0;
        }
    }
}
</style>
<script lang="ts">
import { defineComponent, type PropType } from 'vue'
import InputTextComponent from './InputTextComponent.vue';
import ButtonComponent from './ButtonComponent.vue';

export interface TableHeader {
    name: string;
    type: string;
}

export interface TableRowData {
    name: string;
    value: any;
}

export interface TableRow {
    id: number;
    data: TableRowData[];
}

export default defineComponent({
    name: "TableEditableComponent",
    components: {
        InputTextComponent,
        ButtonComponent,
    },
    data() {
        return {
            currentRow: 0,
            selectedAll: false,
            data: [] as Array<TableRow>,
            selectedRows: [] as Array<number>,
        }
    },
    props: {
        editableRow: Boolean,
        modelValue: {
            type: Array as PropType<Array<TableRow>>,
            required: true,
        },
        headers: {
            type: Array as PropType<Array<TableHeader>>,
            required: true,
        },
        selectable: Boolean,
        tools: Boolean,
    },
    methods: {
        addRow() {
            const data = [] as TableRowData[];
            this.headers.forEach((header) => {
                data.push({
                    name: header.name,
                    value: ""
                });
            });
            this.data.push({
                id: this.currentRow,
                data,
            });
            this.currentRow += 1;
        },
        isLastElement(row: number, cell: number) {
            return row === this.data.length - 1 && cell === this.data[row].data.length - 1;
        },
        keyUp(event: KeyboardEvent, row: number, cell: number) {
            if(event.key === "Enter") {
                if (this.isLastElement(row, cell)) {
                    this.addRow();
                }
            }
        },
        toggleSelectAllItems() {
            if(this.selectedRows.length === this.data.length) {
                this.selectedRows = [];
            } else {
                this.selectedRows = [];
                this.data.forEach((item) => {
                    this.selectedRows.push(item.id);
                });
            }
        },
        deleteRow(id: number) {
            this.data = this.data.filter((item) => item.id !== id);
        },
        addSelectRow(row: number) {
            if(this.selectedRows.includes(row)) {
                this.selectedRows = this.selectedRows.filter((item) => item !== row);
            } else {
                this.selectedRows.push(row);
            }
        },
        deleteAllMarketRows() {
            this.data = this.data.filter((item) => !this.selectedRows.includes(item.id));
            this.selectedRows = [];
        }
    },
    watch: {
        data: {
            immediate: true,
            handler(data) {
                if (data.length === 0) {
                    this.selectedAll = false;
                    this.addRow();
                    return;
                }
                this.$emit("update:modelValue", data);
            },
            deep: true,
        },
    },
    mounted() {
        this.data = this.modelValue;
        this.currentRow = this.data.map((item) => item.id).reduce((a, b) => Math.max(a, b), 0) + 1;
    }
})
</script>