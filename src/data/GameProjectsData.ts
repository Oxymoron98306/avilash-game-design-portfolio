import ProjectData from '@/data/ProjectData.ts'

export default [
    new ProjectData("Numdash", "Numdash", "img/projects/Project-Art-Numdash_Placeholder.png", 
    `
    <div class="paragraph">
     <strong>Numdash</strong> is a 3D game which teaches quick mathametical calculations through the endless runner format. 
     <br/><strong>Genre:</strong> Hybrid-Casual, Endless Runner, Educational, Building.
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li><strong>Educational Material Translation:</strong> Though the gameplay is that of an endless runner, but the The educational material from class 1 to 5.</li>
        <li><strong>Mixed Progression:</strong> Two-layered progression system (the difficulty and syllabus progression is tied to the endless runner mode. The progression of the main progression is tied to the building mode).</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        <strong>Android build available on </strong> <a href="" target="_blank">Playstore</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Project-Art-Numdash_Placeholder.png" alt="Numdash Placeholder Screenshot" />
    </div>
    `, "#e48246", true), // true means it's a game, false means it's an "other" project

    new ProjectData("solar-brawl", "Solar Brawl", "img/projects/Project-Art-Solar_Brawl.png", 
    `
    <div class="paragraph">
     <strong>Solar Brawl</strong> is a 2D arena shooter where players battle eachother while tackling the turbulent physics of space. It was made in the span of 22 hours for a game jam competition. 
     <br/><strong>Genre:</strong> PvP, Local Multiplayer, Arena Shooter <strong>[Requires at least 1 gamepad]</strong>
    </div>
    
    <div class="paragraph">
        Main features :
        <ul>
        <li><strong>Physics Based Movement:</strong> The players have no direct control over their character's movement. Only way for them to move is by the recoil of their projectile, or the through the transfer of momentum of an object that hits them.</li>
        <li><strong>Spatial Awareness:</strong> There is zero gravity and the bullets bounce off walls, so the players have be very careful about their surroundings.</li>
        <li><strong>Quick but Calculated Responses:</strong> The game encourages the players to have quick responses for blocking. But a block meter needs to fill for the block to happen, so the players have to calculate their timing.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        <strong>Windows build available on </strong> <a href="https://avilash-das.itch.io/solar-brawl" target="_blank">itch.io/solar-brawl</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Project-Art-Solar_Brawl.png" alt="Solar Brawl Screenshot" />
    </div>
    `, "#e48246", true), // true means it's a game, false means it's an "other" project


    new ProjectData("substantia-venefica", "Substantia Venefica", "img/projects/Project-Art-Substantia_Venefica.png", `
    <div class="paragraph">
        <strong>Substantia Venefica</strong> is a First-Person shooter that takes place in a flesh bound hellscape where our protagonist has one goal... to destroy whatever is holding this place together. 
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li><strong>Spatial Awerness based Shooting:</strong> The evade system of the game is set-up based on the spatial awerness and active positioning of the player.</li>
        <li><strong>Bullet Hell:</strong> The boss has multiple phases that gets more and more agressive with different attack patterns. Almost mimicing the aspects of a bullet hell.</li>
        </ul>
    </div>

    <div class="paragraph">
        <div class="notice">
        <strong>Windows build available on </strong> <a href="https://avilash-das.itch.io/substantia-venefica" target="_blank">itch.io/substantia-venefica</a>.
        </div>
    </div>

    <div class="paragraph center">
        <img class="pc-screenshot" src="img/projects/Project-Art-Substantia_Venefica.png" alt="Substantia Venefica Screenshot" />
    </div>
    `, "#383838", true),

        new ProjectData("spatial-launch", "Spatial Launch", "img/projects/Project-Art-Spatial_Launch.png", `
    <div class="paragraph">
        <strong>Spatial Launch</strong> is a 2D rocket racing game.
    </div>

    <div class="paragraph">
        Main features :
        <ul>
        <li><strong>Tackling Gravity:</strong> The players have to constantly fight gravity to move through the path.</li>
        <li><strong>Resource Collection:</strong> Fuel containers need to be collected for the rockets to keep flying.</li>
        </ul>
    </div>

    <div class="paragraph">
    <div class="notice">
        <strong>Playable on</strong> <a href="https://avilash-das.itch.io/spatial-launch" target="_blank">itch.io/spatial-launch</a>.
    </div>
    </div>

    <div class="paragraph center">
    <img class="pc-screenshot" src="img/projects/Project-Art-Spatial_Launch.png" alt="Spatial Launch Screenshot" />
    </div>
    `, "#5a78af", true),
];