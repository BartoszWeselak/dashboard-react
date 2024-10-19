import { Card, CardDescription } from "../../components/Card";
import { Feed } from "../../features/app/feed";
import { useAuth } from "../../hooks/auth-context";
import { ContentLayout } from "../../layout/content-layout";
import { DashboardLayout } from "../../layout/dashboard-layout";
import { Image } from "../../components/Image";
import placeholder1 from "../../assets/placeholder1.png";
import placeholder2 from "../../assets/placeholder2.png";
import placeholder3 from "../../assets/placeholder3.png";

export const LandingRoute = () => {
  return (
    <DashboardLayout>
      {" "}
      <ContentLayout>
        {" "}
        <Feed>
          Hej! 🚀 Znalazłem niesamowity sposób na zarabianie pieniędzy online!
          💸💸 Wystarczy zainwestować w Bitcoin i codziennie można mieć 1000 zł
          zysku bez wysiłku! 😱 Sprawdzone, działa! 🤑 Ja już zacząłem, dołącz i
          Ty 👉 [link]. Nie przegap swojej szansy na łatwe pieniądze! #Bitcoin
          #SzybkaKasa #ZarabiajOnline
          <Image size={"medium"} src={placeholder1} />
        </Feed>
        <Feed>
          🔥 To działa! Wystarczy kilka minut dziennie na trading i już zarabiam
          ogromne pieniądze! 💰💰 Dołączyłem do platformy inwestycyjnej i
          zarobiłem pierwsze 5000 zł w tydzień! 😎🚀 Nie potrzebujesz żadnego
          doświadczenia – system robi wszystko za Ciebie! Sprawdź tutaj 👉
          [link] #ŁatwyZysk #InwestycjeOnline #Kryptowaluty
          <Image size={"medium"} src={placeholder2} />
        </Feed>
        <Feed>
          {" "}
          🎯 Jeśli jeszcze nie próbowałeś inwestować w Ethereum, to tracisz
          pieniądze! 📉 Ja już zainwestowałem i codziennie widzę ogromne zyski!
          💹💸 Dołącz do platformy, która zmienia życie! 👉 [link] Szybko i bez
          ryzyka! 💥 #Ethereum #ZarabiajSzybko #InwestycjeBezWysiłku
          <Image size={"medium"} src={placeholder3} />
        </Feed>
      </ContentLayout>
    </DashboardLayout>
  );
};
