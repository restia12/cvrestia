import Hero from "./components/hero";
import RiwayatPendidikan from "./components/riwayatPendidikan";
import RiwayatPekerjaan from "./components/riwayatPekerjaan";
import "./resti-style.css";

export default function CVOnline(){
 return(
<section>
 <Hero/>
 <RiwayatPendidikan/>
 <RiwayatPekerjaan/>
</section>
 )
}