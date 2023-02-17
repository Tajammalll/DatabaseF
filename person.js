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



// Hente data fra Firestore
  const EleverCollection = collection(db, "Elever");
  
  const q = query(EleverCollection,
    orderBy("Fornavn"),
    orderBy("Etternavn"),
    limit(50));

    const data = await getDocs(q);

    let overskrift = 'Fornavn etter Etternavn:';
    let teller = 0;
    let template = '';

    data.docs.forEach(doc => {
      teller += 1;
      template += `
	  <div class="Watchinfo">
  
   
    
    
		Adresse: ${doc.data().Adresse}<br>
		Dato: ${doc.data().Dato}<br>
		Primær ID: ${doc.id}<br>
		Epost: ${doc.data().Epost}</a><br>
		Etternavn: ${doc.data().Etternavn}<br>
		Fornavn: ${doc.data().Fornavn}<br>
        Jobb: ${doc.data().Jobb}<br>
        Klasse: ${doc.data().Klasse}<br>
        Mellomnavn: ${doc.data().Mellomnavn}<br>
        Mobilnummer: ${doc.data().Mobilnummer}<br>
        Postnummer: ${doc.data().Postnummer}<br>
        Tid: ${doc.data().Tid}<br>
        </div>
	  `
    });

    output.innerHTML = template;
    outputTitle.innerHTML = overskrift;