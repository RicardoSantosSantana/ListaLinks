import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
export default function TabImage({ data } = Props) {
    const idTab = "tab_" + data.id 
    return (
        <Tabs defaultActiveKey="description" transition={false} id={idTab} className="mb-3" >
            <Tab eventKey="description" title="Description">
                {data.description}
            </Tab>
            <Tab eventKey="image" title="Image">
                <img src={data.link} width="80%" height="80%"  ></img>
            </Tab>
        </Tabs>
    )
}