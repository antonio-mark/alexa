async function simulateMouseOver() {
  return new Promise((resolve) => {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    elementToSimulateMouseOver = document.querySelector("#vilosControlsContainer > div");

    elementToSimulateMouseOver.dispatchEvent(mouseOverEvent);

    setTimeout(async () => {
      const bc = document.querySelector(
        "#vilosControlsContainer > div > div > div.css-1dbjc4n.r-1p0dtai.r-9njtsq.r-17s6mgv.r-1d2f490.r-u8s1d.r-zchlnj > div.css-1dbjc4n.r-1awozwy.r-13awgt0.r-18u37iz.r-1wtj0ep.r-dfe81l > div:nth-child(1) > div"
      );

      if (parseInt(bc.textContent.replace(":", "")) > 1000) {
        const dont = document.querySelector(
          "#vilosControlsContainer > div > div > div.css-1dbjc4n.r-1p0dtai.r-9njtsq.r-17s6mgv.r-1d2f490.r-u8s1d.r-zchlnj > div:nth-child(3) > div:nth-child(2) > div.css-1dbjc4n.r-1loqt21.r-eu3ka.r-10paoce.r-1otgn73"
        );

        dont.click();

        await new Promise((resolve) => setTimeout(resolve, 3000));

        const next = document.querySelector(
          "#content > div > div.app-body-wrapper > div > div > div.content-wrapper--MF5LS > div > div.videos-wrapper > div > div > div.prev-next-episodes > div:nth-child(1) > div > a.playable-card-mini-static__link--UOJQm"
        );
        next.click();

        window.addEventListener("load", function () {
          simulateHover();
        });

        resolve();
      } else {
        await new Promise((resolve) => setTimeout(resolve, 15000));
        await simulateMouseOver();
        resolve();
      }
    }, 1500);
  });
}

function simulateFullScreen() {
  return new Promise((resolve) => {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    elementToSimulateMouseOver = document.querySelector("#vilosControlsContainer > div");

    elementToSimulateMouseOver.dispatchEvent(mouseOverEvent);

    setTimeout(() => {
      let dont = document.querySelector(
        "#vilosControlsContainer > div > div > div.css-1dbjc4n.r-1p0dtai.r-9njtsq.r-17s6mgv.r-1d2f490.r-u8s1d.r-zchlnj > div:nth-child(3) > div:nth-child(2) > div.css-1dbjc4n.r-1loqt21.r-eu3ka.r-10paoce.r-1otgn73"
      );

      if (dont == null) {
        dont = document.querySelector(
          "#vilosControlsContainer > div > div > div.css-1dbjc4n.r-1p0dtai.r-9njtsq.r-17s6mgv.r-1d2f490.r-u8s1d.r-zchlnj > div:nth-child(3) > div:nth-child(2) > div.css-1dbjc4n.r-1loqt21.r-eu3ka.r-10paoce.r-1otgn73 > div > div > div"
        );
      }

      dont.click();

      resolve();
    }, 1500);
  });
}

async function simulateHover() {
  let elementToSimulateMouseOver = document.querySelector("#vilosControlsContainer > div");

  if (elementToSimulateMouseOver == null) {
    elementToSimulateMouseOver = document.querySelector("#vilosControlsContainer > div");
  }

  await simulateFullScreen();

  await new Promise((resolve) => setTimeout(resolve, 1000));

  await simulateMouseOver();
}

simulateHover();
