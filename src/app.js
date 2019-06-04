/**
 * Skip the archive page: https://mixmax.slack.com/archives/CB7SHUDMW/p1559265229005700
 * -> https://mixmax.slack.com/messages/CB7SHUDMW/p1559265229005700
 *
 * This runs at document start so we can execute as quickly as possible, mostly to preempt Slack's
 * annoying JS that tries to open the link in the desktop app, but also for a fast UX.
 */
window.location.href = window.location.href.replace('/archives/', '/messages/');
