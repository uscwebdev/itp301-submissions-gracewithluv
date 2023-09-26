import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';

// var creates a variable that can be updated
// const creates a read-only variable.
const root = createRoot(document.querySelector('#root'));
root.render(
  <React.StrictMode>
    <div className="header">
      <h1 id="headerh1"> grace's music reviews </h1>
      <h3>bc i have the best music taste EVA</h3>
    </div>
    <div className="maincontent">
      <div className="timestamp">
        <div id="diff">
          <h2> grace's song of the week (08/20/2023) </h2>{' '}
        </div>
        <div id="right">
          <p id="caption">
            posted 2023/08/21 <br /> @graciellie
          </p>
          <img
            id="pfp"
            src="https://raw.githubusercontent.com/uscwebdev/itp301-submissions-gracewithluv/b45e2b73b8cebd983c93fb845b702f75031055ec/IMG_2636.jpg"
          />{' '}
        </div>
      </div>
      <br />
      <img
        id="mainthumb"
        src="https://i.ytimg.com/vi/E7KE1kAoCEY/maxresdefault.jpg"
      />
      <div className="opening">
        <p>
          <span id="award">'song of the week' award goes to:</span>{' '}
          <b>ZEROBASEONE - IN BLOOM! </b>{' '}
        </p>
        <p>
          {' '}
          listen to the full song + watch the whole video{' '}
          <a href="https://www.youtube.com/watch?v=trzeUClQIIg&pp=ygUIaW4gYmxvb20%3D">
            here
          </a>
        </p>
      </div>
      <p>
        yall...if having one of the best debut songs in a WHILE was a crime, zb1
        (abbreviation for ZEROBASEONE) would be locked up LMAOOOO all nine
        members YES. yall need to stop playing with zb1!!! literally blue
        raspberry and flowers into one song (v weird way to describe it) but
        every time i hear this song i'm literally so happy omg.
      </p>
      <p>
        no offense but i didn't watch the survival show (BOYS PLANET 999) they
        were on because i don't care that much for boy group survival shows (but
        i only voted for keita bc he was my #1 pick) BUT i should have watched
        it they're literally soooo talented and funny. kcon rlly introduced me
        to them, and i'm proud to say i am a zerose!!!!! waiting for the
        comeback in november!!!
      </p>
      <p class="bias">
        bias: jiwoong (my bf LMAOOOOimsoseriousOOOO) and possibly zhanghao!!! |
        bias wreaker: taerae + hanbin
      </p>{' '}
      <br />
      <h1> COMMENTS(14) </h1>
      <hr id="commentline" />
      <div className="thumbnail">
        <img
          src="https://i.pinimg.com/564x/b9/eb/2d/b9eb2d0bfa6d717f94f28775da0ee2ab.jpg"
          alt="yunjin profile pic"
        />
        <h4 className="username">
          @lesserafleurs | rank 3 (trainee)
          <span className="time"> &nbsp; 08/21/2023 at 9:51pm </span>
        </h4>
        <p className="likes">
          {' '}
          <a href="https://uscwebdev.github.io/itp301-submissions-gracewithluv/">
            👍
          </a>{' '}
          139 👎 0{' '}
        </p>
        <p className="username">
          it's always "wyd" and never "I'LL KEEP RUNNING TOWARDS YOU. I BELIEVE
          IN MY FAITH CALLED YOU. EVEN IF EVERYTHING AROUND US CHANGES, THE
          HIGHLIGHT OF MY LIFE AND MY REASON TO KEEP GOING IS YOU" AAAAA I LOVE
          THEM{' '}
        </p>
      </div>
      <div className="thumbnail">
        <img
          src="https://i.pinimg.com/564x/1a/89/ee/1a89eec8a3d38a930a9474f3ffdc83ff.jpg"
          alt="jake + sunghoon profile pic"
        />
        <h4 className="username">
          @enhyfemz | rank 1 (novice)
          <span className="time"> &nbsp; 08/21/2023 at 10:23pm </span>
        </h4>
        <p className="likes">
          {' '}
          <a href="https://uscwebdev.github.io/itp301-submissions-gracewithluv/">
            👍
          </a>{' '}
          5 👎 202{' '}
        </p>
        <p className="username">
          enhypen's given-taken solo'd and outperformed stay mad!{' '}
        </p>
      </div>
      <div className="thumbnail">
        <img
          src="https://i.pinimg.com/564x/e5/31/c5/e531c57da1ba044a13e21bfaabd56270.jpg"
          alt="summer walker profile pic"
        />
        <h4 className="username">
          @summerwalker ✅
          <span className="time"> &nbsp; 08/22/2023 at 12:09am </span>
        </h4>
        <p className="likes">
          {' '}
          <a href="https://uscwebdev.github.io/itp301-submissions-gracewithluv/">
            👍
          </a>{' '}
          1934 👎 25{' '}
        </p>
        <p className="username">
          love these boys 🤍 collab coming soon, just y'all waittt!!
          #SummerxZeroBaseOne
        </p>
      </div>
      <div className="thumbnail">
        <img
          src="https://i.pinimg.com/564x/ab/86/13/ab86137a036df2cfcc30f1fe1a548f7f.jpg"
          alt="yunjin profile pic"
        />
        <h4 className="username">
          @krystaaaaaal | rank 18 (debut pick)
          <span className="time"> &nbsp; 08/22/2023 at 2:22am </span>
        </h4>
        <p className="likes"> 👍 34 👎 7 </p>
        <p className="username">
          support my best friend grace's boyfriend jiwoong y'all!!!{' '}
        </p>
      </div>
      <button id="load-btn" class="btn btn-primary">
        <a href="https://uscwebdev.github.io/itp301-submissions-gracewithluv/">
          Load More
        </a>
      </button>
    </div>
    <div className="charts">
      <p>
        <b> GRACE CHART TOP 10 (Week of 08/20/2023)</b>
        <br />
        <br />
        <hr />{' '}
      </p>
      <div className="thumbnail2">
        <img
          src="https://m.media-amazon.com/images/I/71-Ky43N7RL._UF1000,1000_QL80_.jpg"
          alt="SATURNO album cover"
        />
        <h4 ID="top">NUMBER 1: PUNTO 40 (-) </h4>
        <p> RAUW ALEJANDRO </p>
        <p>
          {' '}
          Album: <i> Saturno </i>
        </p>
      </div>
      <div className="thumbnail2">
        <img
          src="https://i.scdn.co/image/ab67616d0000b27354b6c54e83c4154c974c1059"
          alt="OMAH LAY ALBUM COVER"
        />
        <h4 id="top2">NUMBER 2: JOANNA (+12)</h4>
        <p> OMAH LAY </p>
        <p>
          {' '}
          Album: <i> Boy Alone (Deluxe) </i>
        </p>
      </div>
      <div className="thumbnail2">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music116/v4/e9/3e/3e/e93e3e48-6f68-c368-83b4-d15d54fe53c2/075679673787.jpg/1200x1200bf-60.jpg"
          alt="I TOLD THEM ALBUM COVER"
        />
        <h4 id="top3">NUMBER 3: GIZA (feat. Seyi Vibes) (+24) </h4>
        <p> BURNA BOY </p>
        <p>
          {' '}
          Album: <i> I Told Them... </i>
        </p>
      </div>{' '}
      <div className="thumbnail2">
        <img
          src="https://e.snmc.io/i/1200/s/c6498953a5cdbbfc5c78c9163027ce64/10956060"
          alt="mnike album cover"
        />
        <h4 className="top1">#4 - MNIKE (+10) </h4>
        <p> TYLER ICU </p>
        <p>
          {' '}
          Album: <i> MNIKE - SINGLE </i>
        </p>
      </div>{' '}
      <div className="thumbnail2">
        <img
          src="https://is1-ssl.mzstatic.com/image/thumb/Music115/v4/1c/42/2e/1c422e9c-27a2-de9d-ecac-4fc7e7822cd5/193017042863.jpg/600x600bf-60.jpg"
          alt="gone gold album cover"
        />
        <h4 className="top1">#5 - 有吗炒面 ALGTR (+1) </h4>
        <p> LEXIE LIU </p>
        <p>
          {' '}
          Album: <i> 上线了 GONE GOLD </i>
        </p>
      </div>
      <div className="thumbnail2">
        <img
          src="https://i.etsystatic.com/36607478/r/il/24073a/4719329881/il_fullxfull.4719329881_38v3.jpg"
          alt="MANANA SERA BONITO"
        />
        <h4 className="top1">#6 - KARMIKA (+10)</h4>
        <p> KAROL G FEAT. BAD GYAL + SEAN PAUL </p>
        <p>
          {' '}
          Album: <i> MAÑ/SRA/BONITO </i>
        </p>
      </div>
      <div className="thumbnail2">
        <img
          src="https://i.scdn.co/image/ab67616d0000b27354b6c54e83c4154c974c1059"
          alt="BOY ALONE"
        />
        <h4 className="top1">#7 - SOSO (-6)</h4>
        <p> OMAH LAY</p>
        <p>
          {' '}
          Album: <i> BOY ALONE </i>
        </p>
      </div>
      <div className="thumbnail2">
        <img
          src="https://cdns-images.dzcdn.net/images/cover/657d2e7cc3acb311cf5bf659c42fd4c7/500x500.jpg"
          alt="jayo ALBUM COVER"
        />
        <h4 className="top1">#8 - 22 (+17)</h4>
        <p> JAYO </p>
        <p>
          {' '}
          Album: <i> 22 - Single </i>
        </p>
      </div>{' '}
      <div className="thumbnail2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/f/fd/Jimin_Face_debut_album_cover.png"
          alt="face album cover"
        />
        <h4 className="top1">#9 - LIKE CRAZY (+2)</h4>
        <p> JIMIN OF BTS </p>
        <p>
          {' '}
          Album: <i> FACE </i>
        </p>
      </div>
      <div className="thumbnail2">
        <img
          src="https://upload.wikimedia.org/wikipedia/en/0/02/Fromis_9_-_Unlock_My_World.png"
          alt="ULMW"
        />
        <h4 className="top1">#10 - ATTITUDE (-10)</h4>
        <p> fromis_9 </p>
        <p>
          {' '}
          Album: <i> UNLOCK MY WORLD </i>
        </p>
      </div>
    </div>
  </React.StrictMode>
);
