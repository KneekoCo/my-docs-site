---
id: welcome
title: Welcome
description: Getting started with KneekoCo Docs
---

# Getting Started with the Notion API

Welcome! This guide will walk you through how to set up your environment and make your first call to the Notion API. By the end, you'll be able to programmatically access your Notion workspace to retrieve or create content.



## Step 1: Create a Notion Integration

To use the API, you must first create an internal integration.

1. Go to [https://www.notion.com/my-integrations](https://www.notion.com/my-integrations).
2. Click **"New integration"**.

:memo: **Note:** To continue you must be logged in
3. Name your integration (e.g., `My Portfolio Writer Demo`).
4. Select a workspace
5. Selecte the Type
6. Add logo (optional)
4. Set required permissions (start with `Read content` and `Insert content`).
5. Save and copy the **Internal Integration Token**.

> **Important:** Treat this token like a password. Do not expose it in frontend code or commit it to Git. 

| Field | Field Description |
|:------|:------------------|
| **Associated Workspace** | <ul><li>This is the Notion workspace (your account or team) that the integration will have access to.</li><li>You must select a workspace before you can create the integration.</li><li>Notion will allow the integration to interact with only the pages and databases that you explicitly share with it inside this workspace.</li><li>If you don’t see any workspaces listed, it means you're not part of one — create or join a workspace first.</li></ul> |
| **Type** | There are two types of integrations in Notion:<br /><ul><li><strong>Internal Integration</strong> – Built for personal or private workspace use. You manually share pages or databases with the integration. No OAuth or external users involved. Good for automations, scripts, or personal apps.</li><li><strong>Public Integration</strong> – Built for apps that will be shared publicly (like Zapier or Tally integrations). Requires OAuth setup so other Notion users can authorize your app. You’ll need to fill out additional fields like redirect URIs and app descriptions.</li></ul> |

| **Field** | **Description** |
|:----------|:----------------|
| **Company Name** | The name of your company or team publishing the integration.<br /> Appears on your integration’s public page. |
| **Website** | Public-facing website for your company or product.<br /> Gives users context about who built the integration. |
| **Tagline** | A short sentence describing what the integration does.<br /> Shown in the Notion UI during authentication. |
| **Privacy Policy URL** | Public link to your privacy policy.<br /> Required by Notion to explain how you handle user data. |
| **Terms of Use URL** | Public link to your app’s terms and conditions.<br /> Defines what users agree to when they use your integration. |
| **Email** | Contact email for the developer or support team.<br /> Used for troubleshooting or notifications. |
| **Logo** | A square image (PNG, JPG, SVG) that represents your integration.<br /> Shown during authentication and in Notion’s integrations list. |
| **Redirect URIs** | The secure path users are redirected to after logging in via OAuth.<br /><ul><li>Must begin with `https://`</li><li>No wildcards, fragments, IPs, or relative paths</li><li>Must match the token exchange request</li></ul> Example: `https://yourapp.com/oauth/callback` |
| **Notion URL for Optional Template** | (Optional) A link to a Notion page or template that users can clone.<br /> Helps new users get started with a prebuilt layout. |


## Integration Settings Explained

You must select either Read comments or insert comments or both in order to Save.

| **Field / Item**              | **Description**                                                                 |
|------------------------------|---------------------------------------------------------------------------------|
| **Read content**             | Grants the integration permission to retrieve and view existing pages, blocks, or databases within the workspace. It is a **read-only** access level for content. |
| **Update content**           | Allows the integration to modify or overwrite existing pages or blocks. This includes editing text, changing properties, or updating structure. |
| **Insert content**           | Enables the integration to create **new** pages or blocks in the workspace. Useful for bots or automation that generate content. |
| **Read comments**            | Permits the integration to view comments that users have made on pages or blocks. Does **not** allow posting or deleting comments. |
| **Insert comments**          | Allows the integration to add new comments on pages or blocks. Helpful for feedback bots or automated suggestions. |
| **No user information**      | The integration will not access any data related to user profiles. Ensures full user anonymity. |
| **Read user info (no email)**| Grants access to **non-sensitive** user data such as name and profile photo, but **excludes** email addresses. |
| **Read user info (with email)** | Provides full access to user profile information, including **email addresses**. Use this only if email communication or identity verification is necessary. |
| **Cancel / Save**            | UI controls to **cancel** changes or **save** the integration configuration. Not related to permission itself but to user interface actions. |





## Step 2: Share a Page or Database with Your Integration

Notion’s API only has access to pages and databases you explicitly share.

1. Open the Notion page or database you want to access.
2. Click **“Share”**.
3. Select your integration from the list and click **Invite**.

> If you skip this step, the API will return a `403 Forbidden` error.



## Step 3: Make Your First API Call

Try fetching your database structure using `curl`. Replace `YOUR_TOKEN` and `DATABASE_ID` with your actual values.

```bash
curl -X POST https://api.notion.com/v1/databases/DATABASE_ID/query \
  -H "Authorization: Bearer YOUR_TOKEN" \
  -H "Notion-Version: 2022-06-28" \
  -H "Content-Type: application/json"
