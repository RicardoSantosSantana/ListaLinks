import Badge from 'react-bootstrap/Badge';
import TabImage from "../components/template/TabImage"

export const Categories = {
    list:[ "text", "code", "video", "image" ],
    listBadge: {
        "text":"primary",
        "code":"dark",
        "video":"danger",
        "image": "success"
    },
    text: function(data){
        return data.description; 
    },
    code: function(data){
        return <code>{data.description}</code>
    },
    video: function(data){
        return data.description 
    },
    image: function(data){
        return <TabImage data={data}></TabImage>
    },
    badge: function (category){ 
        return  <Badge pill bg={this.listBadge[category]  }>{category}  </Badge> 
    }
  
}
