'use server'

export default async function Simple(formData) {
    console.log('Submitted data:', formData.get('name'));
}