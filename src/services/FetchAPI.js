export async function getAllLaunches(){


    try {
        const resp = await fetch(`https://api.spacexdata.com/v3/launches`);
        const data = await resp.json();    
        
        const dataElements = data.map( e => {
        
            return {
                name: e.mission_name,                
                success: e.launch_success,
                date: e.launch_date_utc,
                article: e.links.article_link,
                video: e.links.video_link,
                patch: e.links.mission_patch,
                
            }
        })
    
        return dataElements; 

    } catch (error) {
            console.error(error);
    }

    
    }