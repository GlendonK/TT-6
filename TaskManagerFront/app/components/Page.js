import React, { useEffect } from "react";
import Container from "./Container";
function Page(props) {
  useEffect(() => {
<<<<<<< HEAD
    document.title = `${props.title} | CurrencyApp`
    window.scrollTo(0, 0)
      
  }, [])
=======
    document.title = `${props.title} | ComplexApp`;
    window.scrollTo(0, 0);
  }, []);
>>>>>>> f126b963da0754b6c972a59369927357d3d9f3c5

  return <Container wide={props.wide}>{props.children}</Container>;
}

export default Page;
