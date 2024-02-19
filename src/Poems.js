import { useState } from "react";
import Parser from 'html-react-parser';
function Poems() {
    // variables holding authors and poems formatted in html
    // TODO: Add more poets/poems
    // TODO: move to different file/cloud storage
    const yeats = {
        SecondComing: "<p>Turning and turning in the widening gyre<br/>The falcon cannot hear the falconer;<br/>Things fall apart; the centre cannot hold;<br/>Mere anarchy is loosed upon the world,<br/>The blood-dimmed tide is loosed, and everywhere<br/>The ceremony of innocence is drowned;<br/>The best lack all conviction, while the worst<br/>Are full of passionate intensity.<br/><br/>Surely some revelation is at hand;<br/>Surely the Second Coming is at hand.<br/>The Second Coming! Hardly are those words out<br/>When a vast image out of Spiritus Mundi<br/>Troubles my sight: somewhere in sands of the desert<br/>A shape with lion body and the head of a man,<br/>A gaze blank and pitiless as the sun,<br/>Is moving its slow thighs, while all about it<br/>Reel shadows of the indignant desert birds.<br/>The darkness drops again; but now I know<br/>That twenty centuries of stony sleep<br/>Were vexed to nightmare by a rocking cradle,<br/>And what rough beast, its hour come round at last,<br/>Slouches towards Bethlehem to be born?<br/></p>",
        ToAnIsleInTheWater: "<p>Shy one, shy one,<br/>Shy one of my heart,<br/>She moves in the firelight<br/>Pensively apart.<br/><br/>She carries in the dishes,<br/>And lays them in a row.<br/>To an isle in the water<br/>With her would I go.<br/><br/>She carries in the candles,<br/>And lights the curtained room,<br/>Shy in the doorway<br/>And shy in the gloom;<br/><br/>And shy as a rabbit,<br/>Helpful and shy.<br/>To an isle in the water<br/>With her would I fly.</p>",
        LakeIsle: "<p>I will arise and go now, and go to Innisfree,<br>And a small cabin build there, of clay and wattles made;<br>Nine bean-rows will I have there, a hive for the honey-bee,<br>And live alone in the bee-loud glade.<br><br>And I shall have some peace there, for peace comes dropping slow,<br>Dropping from the veils of the morning to where the cricket sings;<br>There midnight’s all a glimmer, and noon a purple glow,<br>And evening full of the linnet’s wings.<br><br>I will arise and go now, for always night and day<br>I hear lake water lapping with low sounds by the shore;<br>While I stand on the roadway, or on the pavements grey,<br>I hear it in the deep heart’s core.<br><br><br></p>",
    };
    const joyce = {
        AFlowerGivenToMyDaughter: "<p>Frail the white rose and frail are,<br/>Her hands that gave<br/>Whose soul is sere and paler<br/>Than time's wan wave.<br/><br/>Rosefrail and fair -- yet frailest<br/>A wonder wild<br/>In gentle eyes thou veilest,<br/>My blueveined child.</p>"
    };
    const macdiarmid = {
      LittleWhiteRose: "<p>The rose of all the world is not for me.<br>I want for my part<br>Only the little white rose of Scotland<br>That smells sharp and sweet -- and breaks the heart.</p>"
    };
    const alist = [yeats, joyce, macdiarmid];


    const randP = () => {
        // function to get random poem from random author
        // returns the poem formatted to be displayed in html with <p> and <br/> tags
        var ra = Math.floor(Math.random() * (alist.length));
        var rpoem = Math.floor(Math.random() * (Object.keys(alist[ra]).length));
        var s =Object.values(alist[ra])[rpoem];
        return(s);
    }

    // useState
    const [para, setPoem] = useState(randP);
    const getPoem = () => {
        setPoem(randP);
    };

    return (
    <div className="Poems">
        <h2>POEMS</h2>
            <div className="poemContent">
                <br/>
                <br/>
                {/* on click uses the getPoem function */}
                <p>You may get the same poem again after clicking as there are not many poems uploaded at the moment</p>
                <button onClick={() => {getPoem()}}>Click for a poem</button><br/>
                <div>
                <img src="https://upload.wikimedia.org/wikipedia/commons/8/88/William_Butler_Yeats_by_George_Charles_Beresford.jpg" alt="Portrait picture taken of William Butler Yeats taken by Geord Charles Beresford."/>
                </div>

                <br/>
                <div className="randomPoem">
                    {Parser(para)}
                </div>
        </div>
    </div>
  );
}

export default Poems;
