<script setup>
defineProps({
    label: String,
    id: String,
    name: String,
    type: {
        type: String,
        default: 'text'
    },
    placeholder: String,
    readonly: Boolean,
    maxlength: String,
    modelValue: String,
    width: String
});

defineEmits(['update:modelValue']);
</script>

<template>
    <div class="input-field">
        <label :for="id">{{ label }}</label>
        <input
            :type="type"
            :id="id"
            :name="name"
            :placeholder="placeholder"
            :readonly="readonly"
            :maxlength="maxlength"
            :value="modelValue"
            @input="$emit('update:modelValue', $event.target.value)"
            :style="{ width }"
        />
    </div>
</template>

<style scoped>
div {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    gap: var(--spacing-sm);

    input {
        height: 53px;

        font-family: 'Montserrat';
        font-size: var(--font-size-input);
        text-align: center;

        background-color: var(--text);

        border: 0;
        border-radius: 10px;
    }

    input::placeholder {
        text-align: center;
    }

    input:focus {
        box-shadow: 0 0 8px rgba(47, 50, 57, 0.6);

        outline: none;
    }
}
</style>