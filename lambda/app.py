import json
import boto3
import datetime
from PIL import Image
from PIL.ExifTags import TAGS
from botocore.exceptions import ClientError

def lambda_handler(event, context):
    uploadedFileS3location = event["Records"][0]["s3"]["object"]["key"]
    fileName = uploadedFileS3location.split("/").pop().split(".")[0]
    metadataFileName = fileName + "-" + datetime.datetime.now().strftime("%Y%m%d-%H%M%S") + ".txt"
    s3Client = boto3.client("s3")
    s3Client.download_file("image-processing-s3-storage-images", uploadedFileS3location, "/tmp/" + fileName + ".jpg")

    metadataRaportFile = open("/tmp/" + metadataFileName, "x")

    image = Image.open("/tmp/" + fileName +".jpg")
    imageMetaData = image.getexif()

    for tag_id in imageMetaData:
        tag = TAGS.get(tag_id, tag_id)
        data = imageMetaData.get(tag_id)
        if isinstance(data, bytes):
            data = data.decode()
        metadataRaportFile.write(f"{tag:25}: {data}\n")

    metadataRaportFile.close()

    try:
        response = s3Client.upload_file("/tmp/" + metadataFileName, "image-processing-s3-storage-metadata", "metadata/" + metadataFileName)
        print("Response", response)
    except ClientError as e:
        print(e)
        return {
            "statusCode": 400,
            "body": json.dumps({"message": "Error has occured"})
        }

    return {
        "statusCode": 200,
        "body": json.dumps(response),
    }
