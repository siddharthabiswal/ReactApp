import ChildDesigner from "./ChildDesigner";
import DesignWrapper from "./DesignerWrapper";


function ParentDesigner(){

    return(
        <div>
            <h1>I am the parent designer</h1>
            
            <DesignWrapper bgColor="lightblue">
            <ChildDesigner/>
            </DesignWrapper>
        </div>
    )


}


export default ParentDesigner;