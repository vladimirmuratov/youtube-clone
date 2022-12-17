import DropdownSettingsListItem from "../components/DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "../components/DropdownSettingsHeader.vue";

export default {
    emits: ['close', 'select-option'],
    props: ['selectedOptions'],
    data() {
        return {
            optionName: null
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select-option', {name: this.optionName, value: option})
        }
    },
    components: {DropdownSettingsHeader, DropdownSettingsListItem}
}
