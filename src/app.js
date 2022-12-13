/**
 * Skip the archive page: https://mixmax.slack.com/archives/CB7SHUDMW/p1559265229005700
 * -> https://mixmax.slack.com/messages/CB7SHUDMW/p1559265229005700
 *
 * We cannot simply replace "archives" by "messages" in the URL because this breaks vanity URLs/channels names
 * links, which first need the vanity name --> UUID translation.
 * eg. something.slack.com/archives/my-channel needs to be translated to something.slack.com/archives/CB7SHUXYZ
 * and only the Slack backend can do so.
 * Executing on document_end rather than document_start also seems to make no difference in being able to skip
 * Slack's javascript intent which would open the Slack app if you had it installed.
 */

// Get all links, and keep the one which is the "open in browser" link
const filteredLinks = Array.from(document.getElementsByTagName("a")).filter(
    (link) => {
        return link.href.indexOf("/messages/") !== -1;
    }
);
// If we found it, use it
if (filteredLinks.length > 0) {
    const target = filteredLinks[0];
    window.location.href = target.href;
} else {
    // If we did _not_ find it, fall back to the earlier extension's behavior of using the window URL:
    window.location.href = window.location.href.replace(
        "/archives/",
        "/messages/"
    );
}