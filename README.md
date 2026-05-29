# Easy Eats
Family favorite recipes, all in one convenient spot!

**Link to project:** https://js-easy-eats.vercel.app/

<div style="height: 200px; overflow: hidden;">
    <img src="src/assets/easyeats.gif" style="height: auto; width: 100%; object-fit: cover; transform: translateY(-30px);" alt="easyeats-gif"/>
</div>

**Tech used:** TailWind, DaisyUI, React

## How It's Made:

Easy Eats is an app that presents recipes in a responsive web app with an engaging style and features the ability to translate absolutely everything into 3 different languages. The translations are stored in the translations.js file, here is where I export the translations object, the breakdown of the translation object is as follows. The first will be en, cat, and es, this determines which language is sent to be rendered. 



## Optimizations




## Lessons Learned:

the limitless of variables that can be added to a url

In tailwind, classes without prefixes apply to smaller screens first, using a prefix like sm apply as the screen gets larger

A lot of multipaged projects sometimes don't render because it isn't refreshed from a sleeping state while still being on the '/routeForAbout' for example instead of on the '/' route. Using a vercel.json file, I can make sure all returning requests would be sent on the '/' route, very nice.

In another project I learned about using themes in Daisy UI, here I learned how to set custom color values instead of just using default values.
