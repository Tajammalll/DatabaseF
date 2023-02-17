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
  const WATCHLISTCollection = collection(db, "WATCHLIST");
  
  const q = query(WATCHLISTCollection,
    orderBy("Title"),
    orderBy("Year"),
    limit(50));

    const data = await getDocs(q);

    let overskrift = 'Title etter Titel Type, Year:';
    let teller = 0;
    let template = '';

    data.docs.forEach(doc => {
      teller += 1;
      template += `
	  <div class="Watchinfo">
  
      <img src="${doc.data().Cover}" alt="${doc.data().Album}" style="width:300px;height:450px">
    
    <strong>Film Nr: ${teller}</strong><br>
		Titel: ${doc.data().Title}<br>
		Year: ${doc.data().Year}<br>
		ID: ${doc.id}<br>
		URL: <a href="${doc.data().URL}">${doc.data().URL}</a><br>
		Genres: ${doc.data().Genres}<br>
		Rating: ${doc.data().Rating}<br>
	  </div>
	  `
    });

    output.innerHTML = template;
    outputTitle.innerHTML = overskrift;