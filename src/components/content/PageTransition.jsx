import { CSSTransition } from "react-transition-group";
import { TransitionGroup } from "react-transition-group";

export default function PageTransition({location,match,children}) {
        return(
        <TransitionGroup>
            <CSSTransition
            key={location.key}
            in={match !== null}
            timeout={1080}
            classNames="page"
        >
            <div className="page">
                {children}
            </div>
          </CSSTransition>
        </TransitionGroup>
    );
}