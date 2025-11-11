export default function useFormApp() {
    const mitsos = "mitsos";
    function handleSubmit(event) {
        event.preventDefault();
        // Εδώ μπορείς να προσθέσεις λογική για την υποβολή της φόρμας
        console.log("Φόρμα υποβλήθηκε!");
    }
    return { mitsos, handleSubmit };
}