        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
        // TODO: Add SDKs for Firebase products that you want to use
        // https://firebase.google.com/docs/web/setup#available-libraries
      import { getFirestore, addDoc, setDoc, getDoc, getDocs, where, query, collection, orderBy, limit } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-firestore.js"
        // Your web app's Firebase configuration
        const firebaseConfig = {
          apiKey: "AIzaSyASenm0f6_lMxW9kTBYu3e6daUjKaISA_k",
          authDomain: "database1-a5251.firebaseapp.com",
          projectId: "database1-a5251",
          storageBucket: "database1-a5251.appspot.com",
          messagingSenderId: "518696679066",
          appId: "1:518696679066:web:806c03ecf8915373d89123"
        };
      
        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const db = getFirestore();

		// HTML ELem
        const output = document.getElementById('output');
        const outputTitle = document.getElementById('outputTitle');

 
		// Funksjon for å registrere
        const callr = document.getElementById('registrer');
        callr.addEventListener('submit', async (event) => {
            event.preventDefault();
            const nyElev = await addDoc(
                collection(db, "Elever"),{
                    Fornavn: ForNavn.value,
                    Mellomnavn: MelNavn.value,
                    Etternavn: EtNavn.value,
                    Epost: Epost.value,
                    Mobilnummer: Mobnr.value,
                    Klasse: inklasse.value,
                    Jobb: injobb.value,
                    Dato: date.value,
                    Tid: tid.value,
                    Adresse: inadres.value,
                    Postnummer: inpnr.value
                });
                console.log(nyElev.Fornavn);
        });
 

