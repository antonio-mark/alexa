async function simulateMouseOver(element) {
  return new Promise((resolve) => {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    element.dispatchEvent(mouseOverEvent);

    setTimeout(async () => {
      const bc = document.querySelector(
        "#vilosControlsContainer > div > div > div.css-1dbjc4n.r-1p0dtai.r-9njtsq.r-17s6mgv.r-1d2f490.r-u8s1d.r-zchlnj > div.css-1dbjc4n.r-1awozwy.r-13awgt0.r-18u37iz.r-1wtj0ep.r-dfe81l > div:nth-child(1) > div"
      );

      if (parseInt(bc.textContent.replace(":", "")) > 2215) {
        const dont = document.querySelector(
          "#vilosControlsContainer > div > div > div.css-1dbjc4n.r-1p0dtai.r-9njtsq.r-17s6mgv.r-1d2f490.r-u8s1d.r-zchlnj > div:nth-child(3) > div:nth-child(2) > div.css-1dbjc4n.r-1loqt21.r-eu3ka.r-10paoce.r-1otgn73"
        );

        dont.click();

        const next = document.querySelector(".erc-prev-next-episode > a");
        next.click();

        window.addEventListener("load", function () {
          simulateHover();
        });

        resolve();
      } else {
        await new Promise((resolve) => setTimeout(resolve, 15000));
        await simulateMouseOver(element);
        resolve();
      }
    }, 1500);
  });
}

function simulateFullScreen(element) {
  return new Promise((resolve) => {
    const mouseOverEvent = new MouseEvent("mouseover", {
      bubbles: true,
      cancelable: true,
      view: window,
    });

    element.dispatchEvent(mouseOverEvent);

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
  let elementToSimulateMouseOver = document.querySelector(".css-1dbjc4n.r-1loqt21.r-1pi2tsx.r-10paoce.r-1otgn73.r-13qz1uu");

  if (elementToSimulateMouseOver == null) {
    elementToSimulateMouseOver = document.querySelector("#vilosControlsContainer > div");
  }

  await simulateFullScreen(elementToSimulateMouseOver);

  await new Promise((resolve) => setTimeout(resolve, (22 * 60 + 20) * 1000));

  await simulateMouseOver(elementToSimulateMouseOver);
}

simulateHover();
