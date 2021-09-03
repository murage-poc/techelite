var App = /** @class */ (function () {
    function App() {
        this.team = [];
        this.projects = [
            {
                img: 'assets/images/kilimo-app.png',
                description: 'Kilimo Digital app is an interactive agricultural app that enables farmers to' +
                    ' exercise effective, profitable, and manageable farming.',
                title: 'KILIMO DIGITAL '
            },
            {
                img: 'assets/images/uhaki-app.png',
                description: 'U-Haki app  enables victim  report  cases of both GBV and FGM an get instant assistance' +
                    ' assistance it also helps in statistical records .',
                title: 'U-HAKI '
            }, {
                img: 'assets/images/daze-app.png',
                description: 'No description',
                title: 'DAZE '
            }, {
                img: 'assets/images/blood-app.png',
                description: 'No description',
                title: 'Blood Donor '
            },
            {
                img: 'assets/images/mimi.png',
                description: 'MDP is a progressive web church-portal that facilitates church management to manage their members,' +
                    ' their committees and groups, and more importantly their finances',
                title: 'MDP '
            }
        ];
        this.team = [
            { name: 'Lindah Tulah',
                description: 'My long term career plan is to solve  societal  problems especially  in women \n' +
                    'empowerment through  use of knowledge gained in information technology.I am the co_founder \n' +
                    'of U_Haki App(yet published) using web,mobile,ussd and sms technology.Main purpose is to fight against\n' +
                    ' Gender based violence. Main interest is in innovation  and\n' +
                    '  creation of sustainable life long solutions.Am a self driven individual committed to giving out my best in all I do',
                profilePic: 'assets/images/lindah.jpg',
                title: 'UX/UI designer' },
            { name: 'Carol Muchoki',
                description: 'I am an innovative mobile developer aspiring to leverage technology to create sustainable life long solutions \n' +
                    'to the current problems in the world. I am the co-founder of Kilimo Digital mobile and web application (yet to published),\n' +
                    ' an educational farming app that focuses on helping farmers obtain efficient, manageable, and profitable farming. \n' +
                    'I am driven by the zeal to learn new skills every day, utilize every opportunity I get and make the best out of everything. ',
                profilePic: 'assets/images/carol.jpg',
                title: 'Front end developer' },
            { name: ' Yonathaniel K',
                description: 'I am an extrovert software developer who has been freelancing for 2 years. I like to \n' +
                    'draw, play games, sleep, screw up people\'s life and build something awesome like application software. Moreover I \n' +
                    'am at very ease when working in a collaboration as team, and ready to be self learner.I love working with my \n' +
                    'passion about design and programming and been wanting to jump into it wherever there is an opportunity. Currently \n' +
                    'i’m focusing on learning user experience and design, semantic & component as UX/UI designer as well as working to \n' +
                    'complete Daze and Blood Donor android applications and many more.',
                profilePic: 'assets/images/yonah.jpg',
                title: 'Android developer' },
            {
                name: ' Norah O',
                description: 'I am a creative  empathic software  developer whose aim is to use technology to solve' +
                    ' humanity problems.i am the co-founder of Blessed donors,an app which efficient donation.' +
                    ' My everyday aim in life is to try use the knowledge i have to positively influence my ' +
                    'community and peers,one step at a time.',
                profilePic: 'assets/images/norah.jpg',
                title: 'Full-stack developer'
            },
            {
                name: ' Murage M',
                description: 'I am a conscientious backend developer with in depth experience in object oriented programming design.' +
                    'Building great tech solutions to solve day to day problems in my community is my passion through striving on ' +
                    ' simplicity over complexity and knowledge sharing',
                profilePic: 'https://avatars2.githubusercontent.com/u/25152892?',
                title: 'Backend developer'
            },
        ];
    }
    App.prototype.init = function () {
        this.eventHandler();
        this.templateRenderer();
    };
    App.prototype.eventHandler = function () {
        var _this = this;
        //trigger dropdowns
        var dropdownElems = document.querySelectorAll('.dropdown-trigger');
        // @ts-ignore
        M.Dropdown.init(dropdownElems, { coverTrigger: false, hover: true });
        var sidenavElem = document.querySelectorAll('.sidenav');
        // @ts-ignore
        M.Sidenav.init(sidenavElem);
        var contactFormSubmitBtn = document.querySelector('#submitContact');
        contactFormSubmitBtn.addEventListener('click', function () {
            _this.validateForm('contact-form', null, function () {
                M.toast({ html: 'Sorry! you missed some bits' });
            }, function () {
                contactFormSubmitBtn.setAttribute('disabled', 'true');
                var prevHtml = contactFormSubmitBtn.innerHTML;
                contactFormSubmitBtn.innerHTML = '';
                _this.submitFormData()
                    .then(function () {
                    document.querySelectorAll("#contact-form input:not(button),\n                                #contact-form textarea").forEach(function (input) {
                        input.value = '';
                    });
                    M.toast({
                        html: 'Thank you for contacting us. We will be in touch', displayLength: 5000,
                        completeCallback: function () {
                            contactFormSubmitBtn.removeAttribute('disabled');
                            contactFormSubmitBtn.innerHTML = prevHtml;
                        }
                    });
                })
                    .catch(function (error) {
                    console.log(error);
                });
            });
        });
    };
    App.prototype.templateRenderer = function () {
        var FBIconColor = '#1DA1F2';
        var TwitterIconColor = '#1DA1F2';
        var GithubIconColor = '#000000';
        var fbIcon = '<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n' +
            '    <path fill="' + FBIconColor + '" d="M17,2V2H17V6H15C14.31,6 14,6.81 14,7.5V10H14L17,10V14H14V22H10V14H7V10H10V6A4,4 0 0,1 14,2H17Z" />\n' +
            '</svg>';
        var githubIcon = '<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n' +
            '    <path fill="' + GithubIconColor + '" d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z" />\n' +
            '</svg>';
        var twitterIcon = '<svg style="width:24px;height:24px" viewBox="0 0 24 24">\n' +
            '    <path fill="#' + TwitterIconColor + '" d="M22.46,6C21.69,6.35 20.86,6.58 20,6.69C20.88,6.16 21.56,5.32 21.88,4.31C21.05,4.81 20.13,5.16 19.16,5.36C18.37,4.5 17.26,4 16,4C13.65,4 11.73,5.92 11.73,8.29C11.73,8.63 11.77,8.96 11.84,9.27C8.28,9.09 5.11,7.38 3,4.79C2.63,5.42 2.42,6.16 2.42,6.94C2.42,8.43 3.17,9.75 4.33,10.5C3.62,10.5 2.96,10.3 2.38,10C2.38,10 2.38,10 2.38,10.03C2.38,12.11 3.86,13.85 5.82,14.24C5.46,14.34 5.08,14.39 4.69,14.39C4.42,14.39 4.15,14.36 3.89,14.31C4.43,16 6,17.26 7.89,17.29C6.43,18.45 4.58,19.13 2.56,19.13C2.22,19.13 1.88,19.11 1.54,19.07C3.44,20.29 5.7,21 8.12,21C16,21 20.33,14.46 20.33,8.79C20.33,8.6 20.33,8.42 20.32,8.23C21.16,7.63 21.88,6.87 22.46,6Z" />\n' +
            '</svg>';
        var githubIconPlaceholderElems = document.querySelectorAll('.github-icon');
        var fbIconPlaceholderElems = document.querySelectorAll('.fb-icon');
        var twitterIconPlaceholderElems = document.querySelectorAll('.twitter-icon');
        App.iconsRenderer(githubIcon, githubIconPlaceholderElems);
        App.iconsRenderer(fbIcon, fbIconPlaceholderElems);
        App.iconsRenderer(twitterIcon, twitterIconPlaceholderElems);
        this.renderProjects();
        this.renderProfiles();
    };
    App.prototype.renderProjects = function () {
        var template = '';
        this.projects.forEach(function (project) {
            template += "  <div class=\"col m4 \">\n        <div class=\"card hoverable\">\n            <div class=\"card-image waves-effect waves-block waves-light project-pic\">\n                <img class=\"activator\"\n                   src=\"" + project.img + "\" alt=\"" + project.img.replaceAll(' ', '_') + "\"/>\n            </div>\n            <div class=\"card-content\">\n                <span class=\"card-title activator grey-text text-darken-4 center\">" + project.title + "\n                <i class=\"material-icons right\">more_vert</i>\n                </span>\n            </div>\n            <div class=\"card-reveal\">\n                <span class=\"card-title grey-text text-darken-4\">" + project.title + " <i class=\"material-icons right\">close</i></span>\n                <p>" + project.description + " </p>\n            </div>\n        </div>\n        </div>";
        });
        document.getElementById('projects-placeholder').outerHTML = template;
    };
    App.prototype.renderProfiles = function () {
        var template = '';
        this.team.forEach(function (obj) {
            template += "   <div class=\"col s12 m4 hoverable \">\n                <div class=\"team-member-avatar-container center\">\n                    <img src=\"" + obj.profilePic + "\" alt=\"" + obj.title.replaceAll(' ', '_') + "\">\n                </div>\n                <div class=\"team-member-name center mt-3 pb-1 col s12\">" + obj.name + "</div>\n                <div class=\"team-member-title center col s12\">" + obj.title + "</div>\n                <div class=\"team-member-description center col s12\">\n                " + obj.description + "\n                </div>\n                <div class=\"team-member-contact row  \">\n                    <ul class=\"col sm-12 mt-2 push-m2 push-s2 \">";
            if (obj.github) {
                template += "\n                        <li>\n                            <a href=\"" + obj.github + "\" >\n                            <i class=\"github-icon\">\n                            </i>\n                            </a>\n                        </li>";
            }
            if (obj.twitter) {
                template += " <li>\n                            <a href=\"" + obj.twitter + "\" >\n                                <i class=\"twitter-icon\"></i>\n                            </a>\n                        </li>";
            }
            if (obj.fb) {
                template += " <li>\n                            <a href=\"" + obj.fb + "\"  >\n                                <i class=\"fb-icon\"></i>\n                            </a>\n                        </li>";
            }
            template += "</ul></div></div>";
        });
        document.getElementById('team-placeholder').outerHTML = template;
    };
    App.iconsRenderer = function (icon, elems) {
        elems.forEach(function (elem) {
            elem.innerHTML = icon;
        });
    };
    App.prototype.checkInput = function (input, include, fnOnError) {
        var errors = 0;
        if ((input.readOnly || input.hidden || input.disabled ||
            !App.inputVisible(input))) { //if disabled,hidden or read only
            if (include && include.indexOf(input.id) === -1) { // if not included, pass
                if (input.type === 'number') {
                    if (isNaN(input.value)) {
                        document.querySelector('#' + input.id).classList.add('invalid');
                        if (fnOnError) {
                            fnOnError(input);
                        }
                        errors++;
                    }
                }
                else if (!input.value) {
                    document.querySelector('#' + input.id).classList.add('invalid');
                    if (fnOnError) {
                        fnOnError(input);
                    }
                    errors++;
                }
            }
        }
        else {
            if (!input.value) {
                document.querySelector('#' + input.id).classList.add('invalid');
                if (fnOnError) {
                    fnOnError(input);
                }
                errors++;
            }
        }
        //attach a reset mechanism on keyup and keyenter
        var nodeELem = document.querySelector("#" + input.id);
        ['keyup', 'keyenter', 'focus', 'change', 'touchstart', 'click'].forEach(function (event) {
            nodeELem.addEventListener(event, function (evt) {
                // @ts-ignore
                evt.target.classList.remove('invalid');
            });
        });
        return errors;
    };
    App.prototype.validateForm = function (formId, validationOptions, fnOnError, fnSuccess) {
        var _this = this;
        var include = null, exclude = null, fnOnEachError = null;
        var errorsCount = 0;
        var input;
        if (validationOptions) {
            include = validationOptions['include'];
            exclude = validationOptions['exclude'];
            fnOnEachError = validationOptions['fnOnEachError'];
        }
        document.querySelectorAll("#" + formId + " input:not(button),#" + formId + " textarea").forEach(function (input) {
            if (!exclude || (exclude && exclude.indexOf(input.id) === -1)) { //if there is excluded list and it does not exist
                errorsCount += _this.checkInput(input, include, fnOnEachError);
            }
        });
        if (fnOnError && errorsCount > 0) {
            fnOnError();
        }
        else if (fnSuccess && errorsCount === 0) {
            fnSuccess();
        }
    };
    App.inputVisible = function (elem) {
        if (!(elem instanceof Element))
            throw Error('DOM Utility: parameter in inputVisible is not an element');
        return !!(elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length);
    };
    App.prototype.submitFormData = function () {
    
    };
    return App;
}());
String.prototype.replaceAll = function (search, replacement) {
    var target = this;
    return target.replace(new RegExp(search, 'g'), replacement);
};
document.addEventListener('DOMContentLoaded', function () {
    new App().init();
});
