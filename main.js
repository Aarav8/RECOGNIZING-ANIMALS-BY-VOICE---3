function startClassification()
{
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier =ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/EkM9tDxtS/model.json' ,modelReady);
}

function modelReady()
{
    classifier.classify(gotResults);
}

function gotResults(error,results) 
{
    if (error) 
    {
        console.error(error);
    }
    else
    {
        document.getElementById("label").innerHTML = 'I can hear -' + results[0].label;
        document.getElementById("accuracy").innerHTML = 'Accuracy - ' + (results[0].confidence*100).toFixed(2)+"%";

        image=document.getElementById("image");
        if (results[0].label == "Meowing")
        {
            image.src="2022-02-21 (3).png";
        }
        else if (results[0].label == "Barking")
        {
            image.src="dog barking.png";
        }
        else if (results[0].label == "Roar")
        {
            image.src="download.jpg";
        }
        else if (results[0].label == "mooing")
        {
            image.src="images.png";
        }
        else 
        {
            image.src="download (1).jpg"
        }
    }
}
