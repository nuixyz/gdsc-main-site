import Wave from "react-wavify";
import "./waves.css";

const Waves = () => {
  return (
    <div className="waves">
      <div className="waveContainer">
        <Wave
          className="wave red"
          fill="#DB4437"
          paused={false}
          options={{
            height: 20,
            amplitude: 50,
            speed: 0.2,
            points: 10,
          }}
        />
        <Wave
          className="wave yellow"
          fill="#F4B400"
          paused={false}
          options={{
            height: 40,
            amplitude: 50,
            speed: 0.25,
            points: 8,
          }}
        />
        <Wave
          className="wave green"
          fill="#0F9D58"
          paused={false}
          options={{
            height: 60,
            amplitude: 50,
            speed: 0.2,
            points: 7,
          }}
        />
        <Wave
          className="wave blue"
          fill="#4285F4"
          paused={false}
          options={{
            height: 80,
            amplitude: 50,
            speed: 0.18,
            points: 8,
          }}
        />
      </div>
    </div>
  );
}

export default Waves;
