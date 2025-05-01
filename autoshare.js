

def auto_share_post(post_id):
    access_token = 'your_access_token_here'
    share_url = f'https://graph.facebook.com/v12.0/{post_id}/sharedposts'
    payload = {'access_token': access_token}
    response = requests.post(share_url, data=payload)
    if response.status_code == 200:
        print('Post shared successfully!')
    else:
        print('Error sharing post. Status code:', response.status_code)
